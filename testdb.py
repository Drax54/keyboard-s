from flask import Flask, jsonify, abort
import sqlite3
import json
import os

app = Flask(__name__)
DATABASE = 'software.db'

def init_db():
    """Initialize the database, create table, and insert sample data if not present."""
    conn = sqlite3.connect(DATABASE)
    cursor = conn.cursor()

    # Create the 'software' table
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS software (
            id TEXT PRIMARY KEY,
            about TEXT,
            social_links TEXT,
            supported_on TEXT
        )
    ''')

    # Check if sample data already exists
    cursor.execute("SELECT COUNT(*) FROM software WHERE id = ?", ("microsoft-word",))
    exists = cursor.fetchone()[0]

    if not exists:
        # Sample data to insert
        software_data = {
            "id": "microsoft-word",
            "about": "Microsoft Word is a powerful word processing software.",
            "social_links": {
                "twitter": "https://twitter.com/microsoft",
                "linkedin": "https://linkedin.com/company/microsoft"
            },
            "supported_on": ["Windows", "macOS", "iOS", "Android"]
        }

        # Convert dictionaries and lists to JSON strings
        social_links_json = json.dumps(software_data["social_links"])
        supported_on_json = json.dumps(software_data["supported_on"])

        # Insert the sample data into the table
        cursor.execute('''
            INSERT INTO software (id, about, social_links, supported_on)
            VALUES (?, ?, ?, ?)
        ''', (
            software_data["id"],
            software_data["about"],
            social_links_json,
            supported_on_json
        ))

        conn.commit()
        print("Sample data inserted into the database.")
    else:
        print("Sample data already exists in the database.")

    conn.close()

def get_db_connection():
    """Create a database connection."""
    conn = sqlite3.connect(DATABASE)
    conn.row_factory = sqlite3.Row  # To access columns by name
    return conn

@app.route('/api/get-details/<string:item_id>', methods=['GET'])
def get_details(item_id):
    """API endpoint to get details of a software item by its ID."""
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute('SELECT id, about, social_links, supported_on FROM software WHERE id = ?', (item_id,))
    row = cursor.fetchone()
    conn.close()

    if row is None:
        abort(404, description=f"Item with ID '{item_id}' not found.")

    # Construct the response dictionary
    result = {
        "id": row["id"],
        "about": row["about"],
        "social_links": json.loads(row["social_links"]),
        "supported_on": json.loads(row["supported_on"])
    }

    return jsonify(result), 200

@app.errorhandler(404)
def not_found(error):
    """Custom 404 error handler."""
    response = jsonify({
        "error": "Not Found",
        "message": error.description
    })
    return response, 404

if __name__ == '__main__':
    # Initialize the database and insert sample data
    if not os.path.exists(DATABASE):
        init_db()
    else:
        # Optionally, you can re-initialize or check the database here
        init_db()

    # Run the Flask app
    app.run(debug=True)

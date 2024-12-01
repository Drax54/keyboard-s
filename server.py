# from flask import Flask, jsonify
# from flask_sqlalchemy import SQLAlchemy
# from flask_cors import CORS
# import os
# import sqlite3
# import json

# app = Flask(__name__)
# CORS(app)

# app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///boostmykeys.db'
# app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# db = SQLAlchemy(app)

# # Define the database model
# class AdditionalFields(db.Model):
#     id = db.Column(db.String, primary_key=True)
#     about = db.Column(db.String, nullable=True)
#     social_links = db.Column(db.String, nullable=True)
#     supported_on = db.Column(db.String, nullable=True)

# def initialize_database():
#     """Check if database exists, create it and populate with sample data if not."""
#     if not os.path.exists('boostmykeys.db'):
#         print("Database not found. Creating database and initializing table.")
        
#         # Create the SQLite database and table
#         conn = sqlite3.connect('boostmykeys.db')
#         cursor = conn.cursor()
#         cursor.execute('''
#         CREATE TABLE additional_fields (
#             id TEXT PRIMARY KEY,
#             about TEXT,
#             social_links TEXT,
#             supported_on TEXT
#         )
#         ''')
        
#         # Insert sample data
#         cursor.execute('''
#         INSERT INTO additional_fields (id, about, social_links, supported_on)
#         VALUES (?, ?, ?, ?)
#         ''', ('microsoft-word',
#               'Microsoft Word is a powerful word processing software.',
#               json.dumps(["https://twitter.com/microsoft"]),
#               json.dumps(["Windows", "macOS", "iOS", "Android"])))
        
#         conn.commit()
#         conn.close()
#         print("Database and sample data initialized successfully.")
#     else:
#         print("Database already exists. Skipping initialization.")

# # Initialize the database at application startup
# initialize_database()

# # API route to fetch additional fields by ID
# @app.route('/api/get-details/<string:item_id>', methods=['GET'])
# def get_details(item_id):
#     print(f"Fetching details for item ID: {item_id}")
    
#     item = AdditionalFields.query.get(item_id)
    
#     if not item:
#         print("Item not found in the database.")
#         return jsonify({'error': 'Item not found'}), 404
    
#     print(f"Raw social_links from database: '{item.social_links}'")
    
#     try:
#         if item.social_links and item.social_links.strip():
#             social_links = json.loads(item.social_links.strip())
#             print(f"Decoded social_links: {social_links}")
#         else:
#             social_links = None
#             print("No social_links available.")
#     except (json.JSONDecodeError, TypeError) as e:
#         print(f"Error decoding social_links JSON: {e}")
#         social_links = None

#     result = {
#         'id': item.id,
#         'about': item.about,
#         'social_links': item.social_links,
#         'supported_on': item.supported_on
#     }
#     print(f"API Response: {result}")
#     return jsonify(result)

# if __name__ == '__main__':
#     app.run(host='0.0.0.0', port=5000, debug=True)


from flask import Flask, jsonify, abort
import sqlite3
import json
import os
from flask_cors import CORS  # Import CORS


app = Flask(__name__)
CORS(app)

# CORS(app, resources={r"/api/*": {"origins": "http://localhost:3002"}})
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

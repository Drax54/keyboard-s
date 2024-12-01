import sqlite3
import json

# Remove the old database file
import os
if os.path.exists('boostmykey.db'):
    os.remove('boostmykey.db')

# Create a new database and table
conn = sqlite3.connect('boostmykey.db')
cursor = conn.cursor()

cursor.execute('''
CREATE TABLE additional_fields (
    id TEXT PRIMARY KEY,
    about TEXT,
    social_links TEXT,
    supported_on TEXT
)
''')

# Insert initial data
social_links = json.dumps({
    "twitter": "https://twitter.com/microsoft",
    "linkedin": "https://linkedin.com/company/microsoft"
})
supported_on = json.dumps(["Windows", "macOS", "iOS", "Android"])

cursor.execute('''
INSERT INTO additional_fields (id, about, social_links, supported_on)
VALUES (?, ?, ?, ?)
''', ('microsoft-word', 'Microsoft Word is a powerful word processing software.', social_links, supported_on))

conn.commit()
conn.close()
print("Database recreated and populated successfully.")

CREATE TABLE IF NOT EXISTS tinyurls (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    original_url TEXT NOT NULL,
    tiny_url_code TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP     
);
CREATE INDEX IF NOT EXISTS tiny_url_code_idx ON tinyurls (tiny_url_code);
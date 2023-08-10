CREATE TABLE calculator_history (
    id SERIAL PRIMARY KEY,
    calculation_date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    expression VARCHAR(255) NOT NULL,
    result INTEGER NOT NULL,
    error_message VARCHAR(255)
);
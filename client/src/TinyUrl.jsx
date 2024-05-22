import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getTinyUrl, createTinyUrl} from './api/tinyUrlApi'
import { NotFoundError, BadRequestError } from './errors/CustomError';

const TinyUrl = () => {
    const initialFormState = { originalUrl: '', tinyUrlCode: '' };
    const { id } = useParams();
    const [formData, setFormData] = useState(initialFormState);
    const [responseData, setResponseData] = useState(initialFormState); 
    const [formErrors, setFormErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [redirectError, setRedirectError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        setFormData(responseData);
    }, [responseData]);

    useEffect(() => {
        // check if tiny url code exists in the param
        if (id) {
            const fetchInitialData = async () => {
                setLoading(true);
                try {
                    // retrieve tiny url code from db            
                    const response = await getTinyUrl(id);
                    if (response.data.originalUrl) {
                        window.location.href = response.data.originalUrl; // redirect if code found
                    } else {
                        setRedirectError('An unexpected error occurred');
                    }
                } catch (error) {
                    console.log('Error fetching tiny Url data:', error);
                    if (error instanceof NotFoundError || err instanceof BadRequestError) {
                        setRedirectError(error.message);
                    } else {
                        setRedirectError('An unexpected error occurred');
                    }                   
                } finally {
                    setLoading(false);
                }
            };
            fetchInitialData();
        } else {
            setRedirectError(null);   
        }
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const goToHome = () => {
        navigate('/');
    };

    const validateForm = () => {
        const formErrors = {};
        const urlPattern = /^(https?:\/\/)/; // can be improved to validate more scenarios
        if (!formData.originalUrl.trim()) {     
            formErrors.originalUrl = 'URL is required';
        } else if (!urlPattern.test(formData.originalUrl.trim())) {
            formErrors.originalUrl = 'Invalid URL format';
        }   
        return formErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
            setFormErrors(validationErrors);
            setFormData(initialFormState); // Clear form data on validation failure
        } else {
            setFormErrors({});
            setLoading(true);            
            try {
                const response = await createTinyUrl(formData);
                if (response.data.tinyUrlCode) {
                    const hostName = window.location.href.split('/').slice(0, 3).join('/'); // can be improved by configuration
                    response.data.tinyUrlCode = `${hostName}/${response.data.tinyUrlCode}`;
                    setResponseData(response.data);
                    console.log('Form submitted successfully:', response);
                } else {
                    console.error('Error submitting form:', error);
                }
                setLoading(false);                
            } catch (error) {
                setLoading(false);
                console.error('Error submitting form:', error);
            }
        }
    };

    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text).then(() => {
            alert('Copied to clipboard');
        }).catch(err => {
            console.error('Could not copy text: ', err);
        });
    };

    return (
        <>
            {redirectError ? 
                <div className="container mt-5">
                    <div className="mb-3">
                        <div className="error">{redirectError}</div>
                    </div>
                    <button type="button" className="btn btn-primary" onClick={goToHome}>Back to Homepage</button>
                </div>
            :    <div className="container mt-5">      
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="originalUrl" className="form-label">Enter long URL starting with http:// or https://</label>
                            <input
                                type="text"
                                id="originalUrl"
                                name="originalUrl"
                                className={`form-control ${formErrors.originalUrl ? 'is-invalid' : ''}`}
                                value={formData.originalUrl}
                                onChange={handleChange}
                                disabled={loading}
                            />
                            {formErrors.originalUrl && <div className="invalid-feedback">{formErrors.originalUrl}</div>}                
                        </div>
                        <button type="submit" className="btn btn-primary" disabled={loading}>Shorten URL</button>
                        <div className="mb-3">
                            <label htmlFor="tinyUrlCode" className="form-label">Tiny URL:</label>
                            <input
                                type="text"
                                id="tinyUrlCode"
                                name="tinyUrlCode"
                                className={`form-control ${formErrors.tinyUrlCode ? 'is-invalid' : ''}`}
                                value={formData.tinyUrlCode}
                                disabled
                            />
                        </div>
                        {formData.tinyUrlCode && (
                            <button
                                type="button"
                                className="btn btn-outline-secondary"
                                onClick={() => copyToClipboard(formData.tinyUrlCode)}>Copy
                            </button>
                        )}                
                    </form>
                </div>
            }
        </>
    );
};

export default TinyUrl;
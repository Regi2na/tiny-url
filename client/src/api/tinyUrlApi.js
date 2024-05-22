import { NotFoundError, BadRequestError } from '../errors/CustomError';
const API_DOMAIN = import.meta.env.VITE_API_DOMAIN;
// const API_KEY = import.meta.env.VITE_API_KEY;

const getTinyUrl = async (id) => {
  try {
    const response = await fetch(`${API_DOMAIN}/api/tinyurl/get`, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({ tinyUrlCode: id }),      
    });
    if (!response.ok) {
      if (response.status === 404) {
        throw new NotFoundError('This tiny URL link does not exist');
      }
      if (response.status === 400) {
        throw new BadRequestError('Invalid URL request');
      }
      throw new CustomError('An unknown error occurred', response.status);
    }
    return await response.json();
  } catch (error) {
    throw error;
  }
};
  
const createTinyUrl = async (data) => {
  try {
    const response = await fetch(`${API_DOMAIN}/api/tinyurl/create`, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      if (response.status === 400) {
        throw new BadRequestError('Invalid URL request');
      }
      throw new CustomError('An unknown error occurred', response.status);
    }
    return await response.json();
  } catch (error) {
    throw error;
  }
};  

export {
  getTinyUrl,
  createTinyUrl,
};


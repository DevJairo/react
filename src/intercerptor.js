import fetchIntercept from 'fetch-intercept';
import { toast } from 'react-toastify';
const unregister = fetchIntercept.register({

  request: function (url, config) {
    // Modify the url or config here
    return [url, config];
  },

  requestError: function (error) {
    // Called when an error occured during another 'request' interceptor call
    return Promise.reject(error);
  },

  response: function (response) {
    const notify = (error) => toast.error(error,
      {
        position: "top-center",
        theme: "colored"
      }
    );

    // Modify the reponse object
    if (response.status == 401) {
      let getData = async () => {
        let error = await response.json()
        notify(error.error_description)
        localStorage.clear()
      }
      getData()
    }
    return response;
  },

  responseError: function (error) {
    // Handle an fetch error
    return Promise.reject(error);
  }
});

// Call fetch to see your interceptors in action.
// fetch('http://google.com');

// Unregister your interceptor
// unregister();
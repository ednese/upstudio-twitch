export const getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) {
      return parts
        .pop()
        .split(';')
        .shift();
    }
    return undefined;
  };
  
  export const setCookie = (name, value, expiryDays, domain, secure) => {
    const exdate = new Date();
    exdate.setHours(exdate.getHours() + (expiryDays || 365) * 24);
    const cookieValue = [`${name}=${value}`, `expires=${exdate.toUTCString()}`, 'path=/'];
  
    if (domain) {
      cookieValue.push(`domain=${domain}`);
    }
    if (secure) {
      cookieValue.push('secure');
    }
    document.cookie = cookieValue.join(';');
  };
  
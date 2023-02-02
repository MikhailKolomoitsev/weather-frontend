const getLocation = () => {
  const location = window.navigator && window.navigator.geolocation
  return location
}

export default getLocation
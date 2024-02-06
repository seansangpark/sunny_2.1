const Button = ({ styles }) => {
  const handleMapButtonClick = (e) => {
    // Prevent the default behavior of the button click
    e.preventDefault();

    // URL for Pro Cleaners & Alterations on Google Maps
    const mapURL = 'https://maps.app.goo.gl/77o1hLf5Ah8AchoBA';

    // Check if the user is on an iPhone
    const isiPhone = /iPhone|iPod/.test(navigator.userAgent);

    // Check if the user is on an Android device
    const isAndroid = /Android/.test(navigator.userAgent);

    // Open the URL based on the client machine and browser
    if (isiPhone && navigator.standalone) {
      // If iPhone user with Google Maps app
      window.location.href = `maps://maps.google.com/maps?daddr=${mapURL}`;
    } else if (
      isAndroid &&
      window.navigator.userAgent.toLowerCase().indexOf('chrome') > -1
    ) {
      // If Android user with Google Maps app and using Chrome browser
      window.location.href = `https://maps.google.com/maps?daddr=${mapURL}`;
    } else {
      // For other devices or browsers, use the anchor tag to open in a new tab
      window.open(mapURL, '_blank');
    }
  };

  return (
    <button
      href='/'
      type='button'
      onClick={handleMapButtonClick}
      className='custom__button'
      style={{ marginTop: '2rem' }}
    >
      Visit Us
    </button>
  );
};

export default Button;

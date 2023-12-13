function changeAvatar() {
  const image = prompt('Please enter image link to upload'); 
    document.getElementById('avatar').src = image; // Change the avatar image source
  }
  
  function updateProfile() {
    const newName = prompt('Enter new username:');
    const newBio = prompt('Enter new bio:');
    
    if (newName !== null && newBio !== null) {
      document.getElementById('username').innerText = newName;
      document.getElementById('bio').innerText = newBio;
    }
  }
  
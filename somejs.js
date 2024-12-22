(async () => {
      const response = await fetch(
        "https://calcagni-gabriel.vercel.app/api/non-followers?user=solidsnk86"
      );
      const jsonData = await response.json();
      
      const nonFollowingCount = jsonData.data.nonfollowings_count;
      document.body.textContent = `No le siguen: ${nonFollowingCount}`;
      const 
      window.localStorage?.setItem("github-stats", JSON.stringify({ no_siguen: nonFollowingCount }));
      if(navigator.geolocation) {
            await navigator.geolocation.getCurrentPosition((position) => {
                  const latitude = position.coords.latitude;
                  const longitude = position.coords.longitude;
                  const obj = { latitud: latitude, longitud: longitude };
                  window.localStorage?.setItem("ubicación", JSON.stringify(obj));
      });
      }
})();

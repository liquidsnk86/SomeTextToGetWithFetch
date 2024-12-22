(async () => {
      const response = await fetch(
        "https://calcagni-gabriel.vercel.app/api/non-followers?user=solidsnk86"
      );
      const jsonData = await response.json();
      document.body.textContent = JSON.stringify(jsonData);
})();

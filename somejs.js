(async () => {
      const response = await fetch(
        "https://calcagni-gabriel.vercel.app/api/non-followers?user=solidsnk86"
      );
      const jsonData = await response.json();
      const nonFollowingCount = jsonData.data.nonfollowings_count;
      document.body.textContent = `No le siguen: ${nonFollowingCount}`;
      window.localStorage?.setItem("no_seguidores", nonFollowingCount);
      window.open(response.url);
})();

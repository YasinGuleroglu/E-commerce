const fetchProducts = async () => {
    try {

      const res = await fetch("../db.json");
  
      const data = await res.json();

      return data;
    } catch (err) {
      alert(`Error: ${err}`);
  
     
      return [];
    }
  };
  
  export default fetchProducts;
  
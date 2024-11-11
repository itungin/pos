async function fetchGudangData() {
    try {
      const response = await fetch("https://asia-southeast2-awangga.cloudfunctions.net/itungin/products");
      const data = await response.json();
  
      const tableBody = document.querySelector("#dt tbody");
      tableBody.innerHTML = ""; // Clear existing rows
  
      data.forEach(item => {
        const row = document.createElement("tr");
        row.innerHTML = `
          <td>${item.id}</td>
          <td>${item.name}</td>
          <td>${item.category}</td>
          <td>${item.description}</td>
          <td>${item.price}</td>
          <td>${item.stock}</td>
          <td>
            <button class="btn btn-primary btn-sm">Edit</button>
            <button class="btn btn-danger btn-sm">Delete</button>
          </td>
        `;
        tableBody.appendChild(row);
      });
  
      // Inisialisasi DataTable setelah data selesai dimuat
      $('#dt').DataTable({
        "responsive": true // Aktifkan mode responsif jika diinginkan
      });
    } catch (error) {
      console.error("Error fetching warehouse data:", error);
    }
  }

  // Call the function when the page loads
  document.addEventListener("DOMContentLoaded", fetchGudangData);
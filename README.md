# Export Table jsGrid to CSV

Repository ini menyediakan sebuah fungsi sederhana dalam JavaScript untuk mengexport sebuah table dari jsGrid menjadi file CSV. Fungsi ini memungkinkan Anda untuk mengatur ID dari table yang ingin diexport dan juga nama file CSV yang dihasilkan.

## Penggunaan

Untuk menggunakan fungsi `ExportToCsv`, ikuti langkah-langkah berikut:

1. Sertakan file `export.js` dalam proyek Anda dengan mengimpor file tersebut dari repository ini.

2. Panggil fungsi `ExportToCsv`, sambil menyertakan ID dari table yang ingin diexport dan juga nama file yang diinginkan sebagai argumen. Berikut adalah contohnya:

   ```javascript
   ExportToCsv("idTable", "HasilExportCSV");

Contoh
Berikut adalah contoh yang menunjukkan penggunaan fungsi ExportToCsv:

  ```html
  <!DOCTYPE html>
  <html>
    <head>
      <script src="export.js"></script>
    </head>
    <body>
      <table id="myTable">
        <!-- Isi table di sini -->
      </table>

      <script>
        $("#myTable").jsGrid({
    ...
        })
        ExportToCsv("myTable", "HasilExportTable");
      </script>
    </body>
  </html>

document.addEventListener('DOMContentLoaded', function() {
    // Create style element
    const style = document.createElement('style');
    style.textContent = `
        table {
            border-collapse: collapse;
            width: 100%;
            font-family: Arial, sans-serif;
            background-color: #f9f9f9; /* Warna latar belakang untuk tabel */
        }
        th, td {
            border: 1px solid #000;
            padding: 12px;
            text-align: left;
        }
        th {
            background-color: #4CAF50; /* Warna latar belakang header */
            color: #fff;
            font-weight: bold;
        }
        tr:nth-child(even) {
            background-color: #f0f0f0; /* Warna latar belakang baris genap */
        }
        tr:nth-child(odd) {
            background-color: #fff; /* Warna latar belakang baris ganjil */
        }
        .action-btn {
            background-color: #000;
            border: none;
            color: #fff;
            padding: 8px 12px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            cursor: pointer;
            transition: background-color 0.3s;
        }
        .action-btn:hover {
            background-color: #333;
        }
    `;
    document.head.appendChild(style);

    // Student data
    const studentData = [
        { no: 1, nama: 'Khansa Farah Nafisah', nim: '2301251', prodi: 'sistem informasi kelautan' },
        { no: 2, nama: 'linda apriyani', nim: '2305060', prodi: 'sistem informasi kelautan' },
        { no: 3, nama: 'giza', nim: '2201000', prodi: 'sistem informasi kelautan' },
        { no: 4, nama: 'nadila', nim: '2209872', prodi: 'sistem informasi kelautan' },
        { no: 5, nama: 'bonita', nim: '2209123', prodi: 'sistem informasi kelautan' }
    ];

    // Create table element
    const table = document.createElement('table');
    table.id = 'studentTable';

    // Create table header
    const thead = document.createElement('thead');
    thead.innerHTML = `
        <tr>
            <th>No</th>
            <th>Nama</th>
            <th>NIM</th>
            <th>Prodi</th>
            <th>Aksi</th>
        </tr>
    `;
    table.appendChild(thead);

    // Create table body
    const tbody = document.createElement('tbody');
    studentData.forEach(student => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${student.no}</td>
            <td>${student.nama}</td>
            <td>${student.nim}</td>
            <td>${student.prodi}</td>
            <td><button class="action-btn">Action</button></td>
        `;
        tbody.appendChild(row);
    });
    table.appendChild(tbody);

    // Add table to document body
    document.body.appendChild(table);

    // Add event listeners only to the action button
    const rows = tbody.getElementsByTagName('tr');
    for (let i = 0; i < rows.length; i++) {
        const row = rows[i];
        const actionBtn = row.querySelector('.action-btn');

        switch (i) {
            case 0: // Baris 1: Berubah warna ketika tombol di klik
                actionBtn.addEventListener('click', function() {
                    row.style.backgroundColor = 'blue';
                });
                break;

            case 1: // Baris 2: Berubah warna saat kursor berada di atas tombol "Aksi"
                actionBtn.addEventListener('mouseover', function() {
                    row.style.backgroundColor = 'yellow';
                });
                actionBtn.addEventListener('mouseout', function() {
                    row.style.backgroundColor = ''; // Reset to original
                });
                break;

            case 2: // Baris 3: Tidak terlihat (tetapi masih ada di DOM) saat tombol di klik
                actionBtn.addEventListener('click', function() {
                    row.style.visibility = 'hidden';
                });
                break;

            case 3: // Baris 4: Tidak terlihat ketika kursor berada di atas tombol "Aksi"
                actionBtn.addEventListener('mouseover', function() {
                    row.style.visibility = 'hidden';
                });
                break;

            case 4: // Baris 5: Hilang dari DOM ketika tombol di klik dua kali
                actionBtn.addEventListener('dblclick', function() {
                    row.remove();
                });
                break;
        }
    }
});

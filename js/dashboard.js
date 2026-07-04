function updateClock(){

const now=new Date();

document.getElementById("clock").innerHTML=
now.toLocaleTimeString("id-ID");

}

setInterval(updateClock,1000);

updateClock();

// Simulasi data statistik
const statistik = {

    siswa:356,

    guru:24,

    kelas:12,

    hadir:325

};

document.getElementById("totalSiswa").innerHTML = statistik.siswa;

document.getElementById("totalGuru").innerHTML = statistik.guru;

document.getElementById("totalKelas").innerHTML = statistik.kelas;

document.getElementById("hadirHariIni").innerHTML = statistik.hadir;

const ctx = document.getElementById('attendanceChart');

new Chart(ctx, {

    type: 'bar',

    data: {

        labels: [

            'Sen',

            'Sel',

            'Rab',

            'Kam',

            'Jum',

            'Sab'

        ],

        datasets: [{

            label: 'Jumlah Kehadiran',

            data: [320,335,340,330,325,310]

        }]

    },

    options: {

        responsive:true,

        plugins:{

            legend:{

                display:false

            }

        }

    }

});
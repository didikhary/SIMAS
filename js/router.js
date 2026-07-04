const Router = {

    async load(page){

        const content = document.getElementById("content");

        try{

            const response = await fetch(`views/${page}.html`);

            const html = await response.text();

            content.innerHTML = html;

            // Jalankan fungsi sesuai halaman
            switch(page){

                case "login":
                    initLogin();
                    break;

            }

        }

        catch(error){

            content.innerHTML = `
            <div class="alert alert-danger">
                Halaman tidak ditemukan
            </div>
            `;

        }

    }

};
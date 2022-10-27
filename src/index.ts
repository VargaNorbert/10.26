document.addEventListener("DOMContentLoaded",()=>{
    document.getElementById('gomb')?.addEventListener('click',()=>{

        let szulo = document.getElementById('hiba') as HTMLDivElement; 

        while (szulo.firstChild) {
          szulo.removeChild(szulo.lastChild);
        }

        function hiba(uzenet:string){
            let p = document.createElement('p');
        
            p.innerHTML = uzenet;
            szulo.appendChild(p);
        }



        let nevEll = /^[a-zA-Z " "]+$/;
        let nev : string = (document.getElementById('nev') as HTMLInputElement)?.value ;

        let orszagEll = /^[a-zA-Z]+$/;
        let orszag : string = (document.getElementById('orszag') as HTMLInputElement)?.value ;

        let varosEll = /^[a-zA-Z]+$/;
        let varos : string = (document.getElementById('varos') as HTMLInputElement)?.value ;

        let utcaEll = /^[a-zA-Z" "]+[0-9]+$/;
        let utca : string = (document.getElementById('utca') as HTMLInputElement)?.value ;

        let iranyitoEll = /^[0-9]{4}$/;
        let iranyito : string = (document.getElementById('iranyito') as HTMLInputElement)?.value ;

        let kartyaszamEll = /^[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4}$/;
        let kartyaszam : string = (document.getElementById('kartyaszam') as HTMLInputElement)?.value ;

        let kodEll = /^[0-9]{3}$/;
        let kod : string = (document.getElementById('kod') as HTMLInputElement)?.value ;

        let kartyanevEll = /^[A-Za-z" "]$/;
        let kartyanev : string = (document.getElementById('kartyanev') as HTMLInputElement)?.value ;


        if(!nevEll.test(nev)){
            hiba('Hibás név!')
        }
        if(!orszagEll.test(orszag)){
            hiba('Hibás ország név!')
        }
        if(!varosEll.test(varos)){
            hiba('Hibás város név!')
        }
        if(!utcaEll.test(utca)){
            hiba('Hibás utca név!')
        }
        if(!iranyitoEll.test(iranyito)){
            hiba('Hibás irányítószám!')
        }
        if(!kartyaszamEll.test(kartyaszam)){
            hiba('Hibás kártya szám!')
        }
        if(!kodEll.test(kod)){
            hiba('Hibás kód!')
        }
        if(!kartyanevEll.test(kartyanev)){
            hiba('Hibás kártyanév!')
        }


        if(!szulo.firstChild){
            szulo = document.getElementById('alap') as HTMLDivElement; 

            while (szulo.firstChild) {
                szulo.removeChild(szulo.lastChild);
              }

              let div = document.createElement("div");
              div.classList.add("card,");
              div.classList.add("col-md-12");
              div.classList.add("col-sm-12");

              let kep = document.createElement('img');
              kep.src='/src/siker3.png';
              kep.classList.add("kep")

              div.appendChild(kep);

              let h3 = document.createElement("h3");
              h3.textContent="Gratulálok";

              div.appendChild(h3);

              let h4 = document.createElement("h4");
              h4.textContent= "Sikeres tranzakció!";

              div.appendChild(h4);

              szulo?.appendChild(div);
        }


    })
});


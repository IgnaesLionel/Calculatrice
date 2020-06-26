

let tableau = new Array(); //creation d'un tableau
console.log( tableau);
let calcul=0;
let pas_ch=0;


function getid(id)
{
        return document.getElementById(id);
}

////    ***********************************       ////////
function f_calc(id,n)
{
        if(n=='clr')
        {
                initialiser_calc(id);
        }
        else if(n=='=')
        {
                if(tableau[id][0]!='=' && tableau[id][1]!=1)
                {
                        eval('calcul='+tableau[id][2]+tableau[id][0]+tableau[id][3]+';');
                        tableau[id][0] = '=';
                        getid(id+'_resultat').value=calcul;
                        tableau[id][2]=calcul;
                        tableau[id][3]=0;
                }
        }

        else if(n=='nbs') //effacer le dernier chiffre
        {
                if(getid(id+'_resultat').value<10 && getid(id+'_resultat').value>-10)
                {
                        getid(id+'_resultat').value=0;
                }
                else
                {
                        getid(id+'_resultat').value=getid(id+'_resultat').value.slice(0,getid(id+'_resultat').value.length-1);
                }
                if(tableau[id][0]=='=')
                {
                        tableau[id][2] = getid(id+'_resultat').value;
                        tableau[id][3] = 0;
                }
                else
                {
                        tableau[id][3] = getid(id+'_resultat').value;
                }
        }
        else
        {
                        if(tableau[id][0]!='=' && tableau[id][1]!=1)
                        {
                                eval('calcul='+tableau[id][2]+tableau[id][0]+tableau[id][3]+';');
                                getid(id+'_resultat').value=calcul;
                                tableau[id][2]=calcul;
                                tableau[id][3]=0;
                        }
                        tableau[id][0] = n;
        }
        if(pas_ch==0)
        {
                tableau[id][1] = 1;
        }
        else
        {
                pas_ch=0;
        }
        document.getElementById(id+'_resultat').focus();
        return true;
}

////    ***********************************       ////////


function add_calc(id,n) //ajout d'un chiffre
{
        if(tableau[id][1]==1) // si l'index 1 est egale a 1
        {
                getid(id+'_resultat').value=n;
        }
        else
        {
                getid(id+'_resultat').value+=n;
        }
        if(tableau[id][0]=='=')
        {
                tableau[id][2] = getid(id+'_resultat').value;
                tableau[id][3] = 0;
        }
        else
        {
                tableau[id][3] = getid(id+'_resultat').value;
        }
        tableau[id][1] = 0;
        document.getElementById(id+'_resultat').focus();
        return true;
}



////    ***********************************       ////////






function initialiser_calc(id) //remise a zero de la calculatrice
{
        getid(id+'_resultat').value=0;
        tableau[id] = new Array('=',1,'0','0',0);
        document.getElementById(id+'_resultat').focus();
        return true;
}








////    ***********************************       ////////



function key_detect_calc(id,evt) //detection des touches du pavnum
{
        if((evt.keyCode>95) && (evt.keyCode<106))
        {
                let nbr = evt.keyCode-96;
                add_calc(id,nbr);
        }
        else if((evt.keyCode>47) && (evt.keyCode<58))
        {
                let nbr = evt.keyCode-48;
                add_calc(id,nbr);
        }
        else if(evt.keyCode==107)
        {
                f_calc(id,'+');
        }
        else if(evt.keyCode==109)
        {
                f_calc(id,'-');
        }
        else if(evt.keyCode==106)
        {
                f_calc(id,'*');
        }
        else if(evt.keyCode==111)
        {
                f_calc(id,'/');
        }
        else if(evt.keyCode==110)
        {
                add_calc(id,'.');
        }
        else if(evt.keyCode==190)
        {
                add_calc(id,'.');
        }
        else if(evt.keyCode==188)
        {
                add_calc(id,'.');
        }
        else if(evt.keyCode==13)
        {
                f_calc(id,'=');
        }
        else if(evt.keyCode==46)
        {
                f_calc(id,'ce');
        }
        else if(evt.keyCode==8)
        {
                f_calc(id,'nbs');
        }
        else if(evt.keyCode==27)
        {
                f_calc(id,'clr');
        }

        return true;
}

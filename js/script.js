let next_question = 1
let errors = []
let error_score = 0

function change_sprite(src_name){
    $('.sprite > img').attr('src', './sprite/sprite_' + src_name + '.png')
}

function display_doc(opened){
    if(opened){
        $('.doc').fadeOut()
    }
    else{
        $('.doc').fadeIn()
    }
}

function display_question(question, res, val, error){
    $('.control > p').text(question);
    $('.control > div').replaceWith('<div></div>');
    
    for(var i = 0; i <= 3; i++){
        var btn = document.createElement('input');
        btn.setAttribute('type', 'button'); // input element of type button
        btn.setAttribute('value', res[i]);
        btn.setAttribute("onclick", "answer(" + val[i] + ", '" + error[i] + "')")
        $('.control > div').append(btn)
    }
}

function answer(value, error){
    if(value != 0){
        console.log(value)
        error_score += value
        errors.push(error)
        console.log(next_question)
        question_switch()
    }
    else{
        question_switch()
    }
}

function final(){
    if(error_score == 1){
        var plural = ''
    }else{
        var plural = 's'
    }
    $('.final_pannel').append('<h1>' + error_score + ' erreur' + plural + '</h1>')
    if(errors.length === 0){
        $('.final_pannel').append('<h1>C\'est un sans fautes, bien joué !</h1><img src="./gif/perfect.gif"/>')
    }
    else if(errors.length >= 1 && errors.length <= 2){
        $('.final_pannel').append('<h1>Peu de Fautes, tu peux réesayer, tu n\'es pas loin du compte !</h1><img src="./gif/try_again.webp"/>')
    }
    else{
        $('.final_pannel').append('<h1>Disons que ce n\'est pas top, recommence et lis bien la documentation !</h1><img src="./gif/not_perfect.gif"/>')
    }

        errors.forEach(function(element){
            switch(element){
                case 'transmission':
                    $('.final_pannel').append('<div class="error"><h2>Transmission du virus</h2><div>Le SARS-CoV-2 est un virus qui se propage par le <b>contact physique</b> et les <b>voies respiratoires(postillons)</b>.<br /><br />Le virus <b>ne se transmet pas dans l\'air sur des distances lointaines</b> comme le pollen est emporté par le vent, il va plutôt <b>se fixer à des supports</b> et devenir un autre risque (barre de métro, poignées de portes ...).<br /><br />Les beaux jours arrivant, il est légitime de se poser la question mais non, <b>il n\'est pas prouvé que le moustique soit en mesure de propager le SARS-CoV-2</b>.<br /><br />Evidemment <b>aucun virus ne se propage par la pensée</b> (sauf la bêtise).</div></div>')
                    break;
                case 'traitement':
                    $('.final_pannel').append('<div class="error"><h2>Traitement du Coronavirus</h2><div>Tout traitement même prometteur ne peut pas être sérieusement considéré comme une solution viable même si ce traitement est éprouvé dans le cas d\'autres maladies, des tests doivent être effectués en double aveugle avec des groupes contrôles sinon l\'utilité peut être remise en cause à raison.<br /><br />L\'<b>Hydroxychloroquine</b> séduit beaucoup de personnes, provoque des réactions d\'incompréhension, un sentiment de baillonement politique, pour le moment la méthode scientifique n\'a pas permis de déterminer clairement si oui ou non elle est efficace.<br />En l\'absence de preuves (un cas isolé n\'en est pas une), rien ni personne ne peut affirmer son utilité ou même sa non-dangerosité même si ce médicament est déjà utilisé pour d\'autres maladies.<br /><br />L\'<b>oméopathie</b> ne présente aucune preuve de fonctionnement et ne respecte pas les règles des tests permettant de déterminer si son effet est supérieur à un placebo, dans ce cas la il est impossible d\'informer de son utilité et pas uniquement dans le cas du coronavirus.<br /><br />Pour l\'instant aucun <b>vaccin</b> contre le covid-19 n\'existe.<br /><br />Ainsi pour le moment <b>aucun traitement efficace n\'existe contre le coronavirus</b>.</div></div>')
                    break;
                case 'origine':
                    $('.final_pannel').append('<div class="error"><h2>Origine du virus</h2><div>Il est difficile de l\'affirmer avec certitude mais la théorie la plus probable quand à l\'origine de ce virus est <b>l\'origine animale</b> favorisée par <b>l\'exploitation humaine</b>, des indices penchent pour l\'hypothèse d\'une transmission via une chauve-souris ou d\'un pangolin (ou les deux).<br /><br />Tout ceci est favorisé par une proximité de plus en plus importante avec les hommes du fait de l\'exploitation de leur milieu naturel, cette pression provoque des contacts dangereux entre hommes et animaux porteurs sains.<br /><br />Ni <b>les antennes 5G</b>, ni les <b>fonds de pensions américains</b> n\'ont créés le coronavirus et non personne ne l\'a breveté en 2003.</div></div>')
                    break;
                case 'risque':
                    $('.final_pannel').append('<div class="error"><h2>Personnes à risque</h2><div>Certaines prédispositions présentent plus de risques que d\'autres dans le cas de cette épidémie.<br /><br />Des <b>difficultés digestives</b> ou des <b>problèmes osseux</b> ne présentent pas de risque particulier pour un patient atteint du covid-19 (du moins pour le moment aucun lien n\'a été fait).<br /><br />Les idéologies politiques n\'influent pas non plus sur les risques liés au coronavirus, que l\'on soit de droite, de gauche ou <b>adorateur du 3ème Reich</b>, la situation reste la même.<br /><br />Parmi les prédispositions dangereuses on peut citer le diabète, les troubles cardiaques, l\'hypertension ou encore les <b>troubles pulmonaires</b><br />Il faut aussi noter que les personnes agées sont très vulnérables.</div></div>')
                    break;
                case 'methode':
                    $('.final_pannel').append('<div class="error"><h2>Méthode de protection</h2><div>Un <b>masque chirurgical</b> ne permet pas de se protéger de façon significative contre le Coronavirus, ce dernier permet de protéger les autres en proposant une parade aux postillons.<br /><br />Le <b>masque FFP2</b> protège aussi bien son porteur que les autres cependant ces masques doivent être réservés aux personnels soignants qui en ont besoin.<br /><br />Ces deux types de masques sont utilisables dans un temps limité (jetables) et ne servent à rien si les bonnes pratiques et les gestes barrières ne sont pas respectés, la meilleure solution est donc d\'<b>utiliser un masque réutilisable tout en respectant scrupuleusement les gestes barrières et la distanciation sociale.</b><br /><br />PS : Jusqu\'à preuve du contraire <b>Olivier Minne</b> ne protège pas du coronavirus (malheureusement).</div></div>')
                    break;
            }
        })
    $('.final_pannel').append('<div class="error"><h3>N\'hésitez pas à consulter la documentation sur l\'écran de démarrage pour creuser le sujet !</h3></div><input type=button onClick="window.location.reload()" value="Recommencer" />')
    $('.final').fadeIn()
}

function question_switch(){
    switch(next_question){
        case 1:
            change_sprite(next_question)
            next_question++
            display_question('Comment se transmet le coronavirus ?', ['Par la pensée', 'Par les postillons', 'Transporté par l\'air', 'Par les moustiques'], [1, 0, 1, 1], ['transmission', 'transmission', 'transmission', 'transmission'])
            break;
        case 2:
            change_sprite(next_question)
            next_question++
            display_question('Quel traitement est efficace contre le covid-19 aujourd\'hui ?', ['L\'oméopathie', 'L\'Hydroxychloroquine', 'Le Vaccin', 'Rien de scientifiquement prouvé'], [1, 1, 1, 0], ['traitement', 'traitement', 'traitement', 'traitement'])
            break;
        case 3:
            change_sprite(next_question)
            next_question++
            display_question('Quelle est l\'origine la plus probable du coronavirus ?', ['Des animaux sauvages', 'Les antennes 5G', 'Les fonds de pensions Américains', 'L\'exploitation humaine'], [0, 1, 1, 0], ['origine', 'origine', 'origine', 'origine'])
            break;
        case 4:
            change_sprite(next_question)
            next_question++
            display_question('Quelle prédisposition présente le plus de risques face au Coronavirus dans les suivantes ?', ['Des difficultés digestives', 'Des problèmes pulmonaires', 'L\'amour du 3ème Reich', 'Des problèmes osseux'], [1, 0, 1, 1], ['risque', 'risque', 'risque', 'risque'])
            break;
        case 5:
            change_sprite(next_question)
            next_question++
            display_question('Quelle est la meilleure méthode pour se protéger ?', ['Le masque chirurgical', 'Le masque FFP2', 'Les gestes barrières', 'Olivier Minne'], [1, 1, 0, 1], ['methode', 'methode', 'methode', 'methode'])
            break;
        case 6:
            final()
    }
}
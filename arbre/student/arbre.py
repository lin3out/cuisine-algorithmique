#!/bin/python3

#
#  Copyright (c)  2019 Charline Outters
#  This program is free software: you can redistribute it and/or modify
#  it under the terms of the GNU Affero General Public License as published by
#  the Free Software Foundation, either version 3 of the License, or
#  (at your option) any later version.
#  This program is distributed in the hope that it will be useful,
#  but WITHOUT ANY WARRANTY; without even the implied warranty of
#  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
#  GNU Affero General Public License for more details.
#
#  You should have received a copy of the GNU Affero General Public License
#  along with this program.  If not, see <http://www.gnu.org/licenses/>.
#

from contextlib import redirect_stdout
import random

def student_code(cake, glacage, deco):
    result = False
@    @arbre@@ 
    return result

if __name__ == "__main__":
    #Etablir la liste des possibilités pour chaque étage
    cake_list = ['nature','chocolat','autre']
    glacage_list = ['rose', 'bleu', 'rien']
    deco_list = ['bougies','bonhomme','fraises','rien']
    #initialisation de la variable de test pour voir s'ils sont tous passés ou non
    test = True
    for j in range(10): #on répète le test 10 fois
        #on choisit les composants du gâteau au hasard
        cake = random.choice(cake_list)
        glacage = random.choice(glacage_list)
        deco = random.choice(deco_list)
        #on garde la valeur retournée par l'élève
        student = student_code(cake, glacage, deco)
        #on effectue notre propre test avec les valeurs déterminées avant
        result = False
        if cake == 'nature':
            if glacage == 'rose':
                if deco == 'bougies':
                    result = True
                elif deco == 'bonhomme':
                    result = True
            elif glacage == 'rien':
                if deco == 'bougies':
                    result = True
                elif deco == 'fraises':
                    result = True
        elif cake == 'chocolat':
            if glacage == 'rose':
                if deco == 'rien':
                    result = True
                elif deco == 'bonhomme':
                    result = True
            elif glacage == 'bleu':
                if deco == 'bougies':
                    result = True
                elif deco == 'fraises':
                    result = True      
        #si les deux résultats ne concordent pas, on affiche une erreur et la variable test passe à False
        if result != student:
            print("Tu t'es trompé. Tu as dit que le gâteau " + str(cake) + " avec un glaçage " + str(glacage) + " et une décoration " +str(deco)+ " était valide alors que ce n'est pas le cas.\n" if result==True else "Tu t'es trompé. Tu as dit que le gâteau " + str(cake) + " avec un glaçage " + str(glacage) + " et une décoration " +str(deco)+ " était invalide alors que ce n'est pas le cas.\n")
            test = False
    if test==True:
        print("True")
    else:
        print("Réessaye !")
        exit()
        


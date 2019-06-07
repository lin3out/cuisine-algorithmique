
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



import os
import subprocess
import shlex
from contextlib import redirect_stdout
#Notre propre calcul des quantités
def corr(copy, prevue, voulue):
    while copy:
        elem = copy.pop()
        quantite = elem[1]/prevue*voulue
        solution.append((elem[0],quantite))
    return quantite

if __name__ == "__main__":
    #initialisation des différentes listes nécessaires au test
    ingredients=[]
    solution = []
    copy=[]
    test = True
    #insertion du code de l'élève
@    @regle@@

    quantite = corr(copy,parts_prevues, parts_voulues)
    if quantite_calculee != quantite:
        test = False

    if(test == False):
        print("False")
        exit()        
    else:
        #Si c'est un succès on affiche les quantités nécessaires
        message = 'Pour cette recette, pour '+str(parts_voulues)+' personnes, il faut :\n'
        while solution :
            item = solution.pop()
            if item[0] == 'oeuf':
                message = message + str(item[1])+' ' + item[0]+'(s) - \n'
            else:
                message = message + str(item[1]) + 'gr de ' + item[0] +' - \n'
        print(message)


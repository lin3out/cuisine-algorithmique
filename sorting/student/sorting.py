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


def decalage(rangee, indice):
	k=len(rangee)-1	
	
	while k>indice:
		rangee[k]=rangee[k-1]
		k=k-1
	rangee[k]='vide'

	return rangee


def student_code(attente):
    #Initialisation de la rangée
    rangee = ['vide']*len(attente)
@    @tri@@ 
    return rangee

if __name__ == "__main__":
    #Initialisation de la file d'attente
    attente = ['o','h','g','h','g','s','m','a','d','v']
    test = ['o','h','g','h','g','s','m','a','d','v']
    #Récupération de la réponse de l'élève
    student = student_code(attente)
    test.sort()
    #Test de la réponse de l'élève
    if student == test:
        print("True")
    else:
        print("Les élèves ne sont pas bien triés. L'ordre que tu as obtenu est " + str(student)+".")
        exit()
        


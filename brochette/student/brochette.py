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


def student_code():
# Le code de l'élève va se placer ici
@    @brochette@@
    #print(pic)
    return pic


if __name__ == "__main__":
    list = student_code()
    #on vérifie le nombre de morceaux sur le pic
    if(len(list) == 7):
        print("True")
    elif (len(list) >7):
        print("Il y a trop d'éléments. Il y a " + str(len(list)) +" éléments sur ton pic.\n Les éléments sont organisés comme ceci: "+ str(list)+".\n")
        exit()
    else:
        print("Il n'y a pas assez d'éléments. Il y a " + str(len(list)) +" éléments sur ton pic.\n Les éléments sont organisés comme ceci: "+ str(list)+".\n")
        exit()

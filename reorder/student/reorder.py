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


def student_code(list):
# Le code de l'élève va se placer ici
@	@reorder@@
	return list


if __name__ == "__main__":
	list = list()
	list_corr = [1,2,3,4,5,6,7,8,9,10]
	list_stud = student_code(list)
	# On compare les deux listes 
	if(list_corr == list_stud):
		print("True")
	else:
		print("Les instructions ne sont pas dans le bon ordre.")
		exit()

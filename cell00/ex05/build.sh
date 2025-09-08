ai=$@

if [ -z $ai ]
then 
	echo "No argument supplied"
	exit 1
fi

for i in $ai
do  mkdir "ex$i"
done

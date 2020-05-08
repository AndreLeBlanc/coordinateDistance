const coordinates = [[57.919116, 15.140096], [57.919018, 15.139817], [57.919049, 15.139608], [57.918925, 15.139952], [57.919107, 15.139836], [57.91913, 15.139876], [57.919102, 15.139743], [57.919165, 15.139889], [57.918986, 15.139788], [57.91901, 15.139827]];
function distance(lat1, lat2, lon1, lon2) {
	const R = 6371e3; // metres
	const φ1 = lat1 * Math.PI/180; // φ, λ in radians
	const φ2 = lat2 * Math.PI/180;
	const Δφ = (lat2-lat1) * Math.PI/180;
	const Δλ = (lon2-lon1) * Math.PI/180;

	const a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
	          Math.cos(φ1) * Math.cos(φ2) *
	          Math.sin(Δλ/2) * Math.sin(Δλ/2);
	const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
	return R * c; // in metres
}

var dists = [];
for(var i = 0; i < coordinates.length - 1; i++) {
	for(var j = i+1; j < coordinates.length; j++) {
		dists.push(distance(coordinates[i][0], coordinates[j][0], coordinates[i][1], coordinates[j][1]));
	}
}

const average = dists.reduce( ( p, c ) => p + c, 0 ) / dists.length;
console.log(dists);
console.log(average);
const s = Math.sqrt(dists.map(x => Math.pow(x-average,2)).reduce((a,b) => a+b)/dists.length);
console.log(s);
console.log(Math.max(...dists));
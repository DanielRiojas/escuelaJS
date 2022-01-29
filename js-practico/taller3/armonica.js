/*Fórmula de la media armónica
H = N / (1/x1 + 1/x2 + 1/x3... 1/xN)
*/

function calculateHarmonicMean(data) {
    if(data.length == 1) return data.length[0];

    const N = data.length;
    let harmonic = 0;
    
    //Obtener sumatoria hasta N
    const sumDenominator = data.reduce(
        function(total, value) {
            return total + (1 / value);
        }
    );

    harmonic = N / sumDenominator;

    return harmonic;
}
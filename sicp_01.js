// SICP JS 1.1.7

function abs(x) {
    return x >= 0 ? x : - x;
}

function average(l, r) {
    return (l + r) / 2;
}

function relative_error(estimate, reference) {
    return abs(estimate - reference) / reference;
}

function sqrt(x) {
    
    function square() {
        return x * x;
    }
    
    function is_good_enough(guess) {
        
        return relative_error(guess, improve(guess)) < 0.001;
    }
    
    function improve(guess) {
        return average(guess, x / guess);
    }
    
    function sqrt_iter(guess) {
        return is_good_enough(guess)
               ? guess
               : sqrt_iter(improve(guess));
    }
    
    return sqrt_iter(1);
}


function cbrt(x) {
    
    function cube() {
        return x * x * x;
    }
    
    function improve(guess) {
        return ((x / (guess * guess)) + (2 * guess)) / 3;
    }
    
    function is_good_enough(guess) {
        
        return relative_error(guess, improve(guess)) < 0.001;
    }
    
    function cbrt_iter(guess) {
        return is_good_enough(guess)
               ? guess
               : cbrt_iter(improve(guess));
    }

    
    return cbrt_iter(1);
}
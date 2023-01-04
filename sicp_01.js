// SICP JS 1.1.7

function abs(x) {
    return x >= 0 ? x : - x;
}

function square(x) {
    return x * x;
}

function is_good_enough(guess, x) {
    
    return relative_error(guess, improve(guess, x)) < 0.001;
}

function relative_error(estimate, reference) {
    
    return abs(estimate - reference) / reference;
}

function average(x, y) {
    return (x + y) / 2;
}

function improve(guess, x) {
    return average(guess, x / guess);
}

function sqrt_iter(guess, x) {
    return is_good_enough(guess, x)
           ? guess
           : sqrt_iter(improve(guess, x), x);
}

function sqrt(x) {
    return sqrt_iter(1, x);
}

function cube(x) {
    return x * x * x;
}

function improve_cube(guess, x) {
    return ((x / square(guess)) + (2 * guess)) / 3;
}

function is_good_enough_cube(guess, x) {
    
    return relative_error(guess, improve_cube(guess, x)) < 0.001;
}

function cbrt_iter(guess, x) {
    return is_good_enough_cube(guess, x)
           ? guess
           : cbrt_iter(improve_cube(guess, x), x);
}

function cbrt(x) {
    return cbrt_iter(1, x);
}
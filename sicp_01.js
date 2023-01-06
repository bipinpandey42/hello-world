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

function fib(n) {
    return fib_iter(1, 0, n);
}
function fib_iter(a, b, count) {
    return count === 0
           ? b
           : fib_iter(a + b, a, count - 1);
}

function count_change(amount) {
    return cc(amount, 5);
}

function cc(amount, kinds_of_coins) {
    return amount === 0
           ? 1
           : amount < 0 || kinds_of_coins === 0
           ? 0
           : cc(amount, kinds_of_coins - 1)
             +
             cc(amount - first_denomination(kinds_of_coins),
                kinds_of_coins);
}

function first_denomination(kinds_of_coins) {
    return kinds_of_coins === 1 ? 1
         : kinds_of_coins === 2 ? 5
         : kinds_of_coins === 3 ? 10
         : kinds_of_coins === 4 ? 25
         : kinds_of_coins === 5 ? 50
         : 0;   
}

function f_of_n(n) {
        return n < 3
               ? n
               : f_of_n(n-1) + 2 * f_of_n(n-2) 3 * f_of_n(n-3);
}

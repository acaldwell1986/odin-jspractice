const ftoc = function(F) {
    let C = (F -32) * (5/9);
    return C.toFixed(1);

};

const ctof = function(C) {
    let F = (C * (9/5) + 32)
    return F.toFixed(1);
};

    
initSidebarItems({"constant":[["MAX_MULTINOMIAL_LEN",""],["MAX_PRIME",""],["MAX_PRIME_INDEX",""],["NOT_A_PRIME",""],["PRIME_TO_INDEX_MAP",""]],"fn":[["binomial",""],["binomial2",""],["binomial_odd",""],["direct_binomial","Calling this function safely requires that  * `p` is a valid prime  * `p <= 19`  * `k, n < p`. These invariants are often known apriori because k and n are obtained by reducing mod p (and the first two are checked beforehand), so it is better to expose an unsafe interface that avoids these checks."],["integer_power","Computes b^e."],["inverse",""],["is_valid_prime",""],["logp",""],["minus_one_to_the_n",""],["multinomial","This computes the multinomial coefficient $\\binom{n}{l_1 \\ldots l_k}\\bmod p$, where $n$ is the sum of the entries of l. This function modifies the entries of l."],["multinomial2",""],["multinomial_odd",""],["power_mod","Compute b^e mod p. We use this for computing modulo inverses."]],"static":[["BINOMIAL_TABLE",""],["INVERSE_TABLE",""]]});
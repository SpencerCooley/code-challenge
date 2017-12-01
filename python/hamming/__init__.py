# Define your compute function here.
# run python -m unittest test.hamming_test to ensure the
# unit tests pass and your code meets all of the conditions.
#

def compute(a,b):
    # ensure the strands are the same length
    if len(a) != len(b):
        raise ValueError('strains must be the same length')
    else:
        mutation_count = 0
        # count the difference in nucleotides between strands
        for i, nucleotide in enumerate(a):
            if nucleotide != b[i]:
                mutation_count += 1
        return mutation_count

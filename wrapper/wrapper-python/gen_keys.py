import rsa
pubkey, privkey = rsa.newkeys(2 ** 10)
print(pubkey)
print(privkey)


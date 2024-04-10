# @TEST-EXEC: zeek -NN Matti::zeekjs-python-hello-world |sed -e 's/version.*)/version)/g' >output
# @TEST-EXEC: btest-diff output

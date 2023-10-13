from flask import Flask, render_template
import os

app = Flask(__name__)
app.static_folder = 'static'
app.template_folder = 'templates'


@app.route('/', methods=['GET'])
@app.route('/trang_chu')
def trang_chu():
    return render_template('index.html')


@app.route("/mien_bac", methods=['GET'])
def mien_bac():
    return render_template('mienbac.html')


@app.route("/mien_nam", methods=['GET'])
def mien_nam():
    return render_template('miennam.html')


@app.route("/mien_tay", methods=['GET'])
def mien_tay():
    return render_template('mientay.html')


@app.route("/mien_trung", methods=['GET'])
def mien_trung():
    return render_template('mientrung.html')

@app.route("/chi_tiet", methods=['GET'])
def chi_tiet():
    return render_template('chitiet.html')


if __name__ == '__main__':
    app.run(debug=True)

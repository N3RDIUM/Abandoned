import sys
import logger
from PyQt6 import QtWidgets
from main_window import MainWindow

if __name__ == "__main__":
    app = QtWidgets.QApplication(sys.argv)
    AutoGrader = QtWidgets.QMainWindow()
    ui = MainWindow()
    ui.setupUi(AutoGrader)
    AutoGrader.show()
    sys.exit(app.exec())
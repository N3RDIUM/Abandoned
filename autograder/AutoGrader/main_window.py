from PyQt6 import QtCore, QtGui, QtWidgets
import os

class MainWindow(object):
    def setupUi(self, AutoGrader):
        """
        Setup UI
        :param AutoGrader:
        :return:
        """
        AutoGrader.setObjectName("AutoGrader")
        AutoGrader.setFixedSize(1200, 600)
        self.centralwidget = QtWidgets.QWidget(AutoGrader)
        self.centralwidget.setObjectName("centralwidget")
        self.listView = QtWidgets.QListView(self.centralwidget)
        self.listView.setGeometry(QtCore.QRect(640, 80, 251, 441))
        self.listView.setObjectName("listView")
        self.listView_2 = QtWidgets.QListView(self.centralwidget)
        self.listView_2.setGeometry(QtCore.QRect(940, 80, 251, 441))
        self.listView_2.setObjectName("listView_2")
        self.label = QtWidgets.QLabel(self.centralwidget)
        self.label.setGeometry(QtCore.QRect(640, 0, 561, 31))
        self.label.setObjectName("label")
        self.pushButton = QtWidgets.QPushButton(self.centralwidget)
        self.pushButton.setGeometry(QtCore.QRect(900, 90, 31, 31))
        self.pushButton.setObjectName("pushButton")
        self.pushButton_2 = QtWidgets.QPushButton(self.centralwidget)
        self.pushButton_2.setGeometry(QtCore.QRect(900, 130, 31, 31))
        self.pushButton_2.setObjectName("pushButton_2")
        self.pushButton_3 = QtWidgets.QPushButton(self.centralwidget)
        self.pushButton_3.setGeometry(QtCore.QRect(900, 230, 31, 31))
        self.pushButton_3.setObjectName("pushButton_3")
        self.pushButton_4 = QtWidgets.QPushButton(self.centralwidget)
        self.pushButton_4.setGeometry(QtCore.QRect(900, 270, 31, 31))
        self.pushButton_4.setObjectName("pushButton_4")
        self.pushButton_5 = QtWidgets.QPushButton(self.centralwidget)
        self.pushButton_5.setGeometry(QtCore.QRect(644, 530, 251, 24))
        self.pushButton_5.setObjectName("pushButton_5")
        self.pushButton_6 = QtWidgets.QPushButton(self.centralwidget)
        self.pushButton_6.setGeometry(QtCore.QRect(640, 50, 251, 24))
        self.pushButton_6.setObjectName("pushButton_6")
        self.pushButton_7 = QtWidgets.QPushButton(self.centralwidget)
        self.pushButton_7.setGeometry(QtCore.QRect(940, 530, 251, 24))
        self.pushButton_7.setObjectName("pushButton_7")
        self.filelist = QtWidgets.QTreeView(self.centralwidget)
        self.filelist.setGeometry(QtCore.QRect(10, 40, 620, 500))
        self.filelist.setObjectName("filelist")
        self.load_project_structure("./")
        self.pushButton_8 = QtWidgets.QPushButton(self.centralwidget)
        self.pushButton_8.setGeometry(QtCore.QRect(10, 10, 621, 24))
        self.pushButton_8.setObjectName("pushButton_8")
        self.pushButton_8.clicked.connect(self.load_project_structure_clicked)
        self.label_2 = QtWidgets.QLabel(self.centralwidget)
        self.label_2.setGeometry(QtCore.QRect(640, 30, 561, 16))
        self.label_2.setObjectName("label_2")
        AutoGrader.setCentralWidget(self.centralwidget)
        self.menubar = QtWidgets.QMenuBar(AutoGrader)
        self.menubar.setGeometry(QtCore.QRect(0, 0, 800, 22))
        self.menubar.setObjectName("menubar")
        self.menuFIle = QtWidgets.QMenu(self.menubar)
        self.menuFIle.setObjectName("menuFIle")
        self.menuEdit = QtWidgets.QMenu(self.menubar)
        self.menuEdit.setObjectName("menuEdit")
        self.menuHelp = QtWidgets.QMenu(self.menubar)
        self.menuHelp.setObjectName("menuHelp")
        AutoGrader.setMenuBar(self.menubar)
        self.statusbar = QtWidgets.QStatusBar(AutoGrader)
        self.statusbar.setObjectName("statusbar")
        AutoGrader.setStatusBar(self.statusbar)
        self.actionComing_soon = QtGui.QAction(AutoGrader)
        self.actionComing_soon.setObjectName("actionComing_soon")
        self.actionComing_soon_2 = QtGui.QAction(AutoGrader)
        self.actionComing_soon_2.setObjectName("actionComing_soon_2")
        self.actionComing_soon_3 = QtGui.QAction(AutoGrader)
        self.actionComing_soon_3.setObjectName("actionComing_soon_3")
        self.menuFIle.addAction(self.actionComing_soon_3)
        self.menuEdit.addAction(self.actionComing_soon)
        self.menuHelp.addAction(self.actionComing_soon_2)
        self.menubar.addAction(self.menuFIle.menuAction())
        self.menubar.addAction(self.menuEdit.menuAction())
        self.menubar.addAction(self.menuHelp.menuAction())

        self.retranslateUi(AutoGrader)
        QtCore.QMetaObject.connectSlotsByName(AutoGrader)

    def load_project_structure(self, startpath):
        """
        Load Project structure tree
        :param startpath: 
        :param tree: 
        :return: 
        """
        model = QtGui.QFileSystemModel()
        model.setRootPath(startpath)
        self.filelist.setModel(model)
        self.filelist.setRootIndex(model.index(startpath))

    def load_project_structure_clicked(self):
        """
        Load Project structure tree
        :param startpath: 
        :param tree: 
        :return: 
        """
        dialog = QtWidgets.QFileDialog()
        dialog.create()
        dir = dialog.getExistingDirectory()

        while dialog.isVisible():
            QtWidgets.QApplication.processEvents()
        
        if os.path.isdir(dir):
            self.load_project_structure(dir)
        
        dialog.close()

    def retranslateUi(self, AutoGrader):
        """
        Retranslate UI
        :param AutoGrader:
        :return:
        """
        _translate = QtCore.QCoreApplication.translate
        AutoGrader.setWindowTitle(_translate("AutoGrader", "AutoGrader"))
        self.label.setText(_translate("AutoGrader", "<html><head/><body><h1 align=\"center\" style=\" margin-top:18px; margin-bottom:12px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;\"><span style=\" font-size:xx-large; font-weight:700;\">AstroGrader</span></h1></body></html>"))
        self.pushButton.setText(_translate("AutoGrader", ">>"))
        self.pushButton_2.setText(_translate("AutoGrader", "<<"))
        self.pushButton_3.setText(_translate("AutoGrader", ">"))
        self.pushButton_4.setText(_translate("AutoGrader", "<"))
        self.pushButton_5.setText(_translate("AutoGrader", "Refresh"))
        self.pushButton_6.setText(_translate("AutoGrader", "Get more scripts"))
        self.pushButton_7.setText(_translate("AutoGrader", "Continue ->"))
        self.pushButton_8.setText(_translate(
            "AutoGrader", "Change Directory..."))
        self.label_2.setText(_translate(
            "AutoGrader", "<p align=\"center\">Please choose scripts to apply to your data.</p>"))
        self.menuFIle.setTitle(_translate("AutoGrader", "FIle"))
        self.menuEdit.setTitle(_translate("AutoGrader", "Edit"))
        self.menuHelp.setTitle(_translate("AutoGrader", "Help"))
        self.actionComing_soon.setText(
            _translate("AutoGrader", "Coming soon!"))
        self.actionComing_soon_2.setText(
            _translate("AutoGrader", "Coming soon!"))
        self.actionComing_soon_3.setText(
            _translate("AutoGrader", "Coming soon!"))

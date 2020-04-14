//
//  LabelsView.swift
//  Today
//
//  Created by Slava Sobolev on 4/13/20.
//

import UIKit
import Foundation


class LabelsView: UIView {
  private let columns = [
    Column(color: #colorLiteral(red: 1, green: 0.5575068593, blue: 0, alpha: 1), label: "Active"),
    Column(color: #colorLiteral(red: 0, green: 0.7940312624, blue: 0.2808334529, alpha: 1), label: "Recovered"),
    Column(color: #colorLiteral(red: 1, green: 0.04556197673, blue: 0.09580480307, alpha: 1), label: "Deaths", right: true),
  ]
  
  private var stackView: UIStackView!
  
  override init(frame: CGRect) {
    super.init(frame: frame)
    translatesAutoresizingMaskIntoConstraints = false
  
    initStackView()
    initColumns()
  }
  
  required init?(coder: NSCoder) {
    fatalError("init(coder:) has not been implemented")
  }
  
  private func initStackView() {
    stackView = UIStackView()
    stackView.translatesAutoresizingMaskIntoConstraints = false;
    stackView.axis = .horizontal
    
    stackView.distribution = .fillProportionally

    addSubview(stackView)
     
     NSLayoutConstraint.activate([
       stackView.widthAnchor.constraint(equalTo: widthAnchor),
     ])
   }
  
  private func initColumns() {
    for col in columns {
      stackView.addArrangedSubview(col)
    }
  }
}

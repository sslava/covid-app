//
//  Column.swift
//  Today
//
//  Created by Slava Sobolev on 4/13/20.
//

import UIKit
import Foundation

class Column: UIStackView {
  private var title: UILabel!
  private var numbers: UILabel!
  
  convenience init(color: UIColor, label: String, right: Bool = false) {
    self.init(frame: .zero)
        
    title = UILabel(frame: CGRect(x: 0, y: 0, width: 0, height: 15))
    title.font = UIFont.systemFont(ofSize: 13)
    
    title.text = label
    
    title.textColor = .systemRed
    
    numbers = UILabel(frame: CGRect(x: 0, y: 0, width: 0, height: 15))
    numbers.font = UIFont.systemFont(ofSize: 13)
    numbers.text = "12 3123"

    if(right) {
      title.textAlignment = .right
      numbers.textAlignment = .right
    }
    
        
    addArrangedSubview(title)
    addArrangedSubview(numbers)
  }
  
  override init(frame: CGRect) {
    super.init(frame: frame)
    translatesAutoresizingMaskIntoConstraints = false
    axis = .vertical
  }
  
  
  required init(coder: NSCoder) {
    fatalError("init(coder:) has not been implemented")
  }
}

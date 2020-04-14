//
//  BarView.swift
//  TodayExt
//
//  Created by Slava Sobolev on 4/13/20.
//

import UIKit
import Foundation

// https://medium.com/better-programming/react-native-how-to-build-a-home-screen-widget-for-ios-and-android-8b2d7db343cb

class BarView: UIView {
  private static let barColors = [#colorLiteral(red: 1, green: 0.5575068593, blue: 0, alpha: 1), #colorLiteral(red: 0, green: 0.7940312624, blue: 0.2808334529, alpha: 1), #colorLiteral(red: 1, green: 0.04556197673, blue: 0.09580480307, alpha: 1)]
  
  private let bars = [UIView(frame: .zero), UIView(frame: .zero), UIView(frame: .zero)]
  private var barConstraints = [NSLayoutConstraint]()
  private var stackView: UIStackView!
  
  override init(frame: CGRect) {
    super.init(frame: frame)
    translatesAutoresizingMaskIntoConstraints = false
            
    initStackView()
    initBarsView()
  }
  
  required init?(coder: NSCoder) {
    fatalError("init(coder:) has not been implemented")
  }
  
  private func initStackView() {
    stackView = UIStackView(arrangedSubviews: bars)
    stackView.translatesAutoresizingMaskIntoConstraints = false;
    stackView.axis = .horizontal

    addSubview(stackView)
    
    NSLayoutConstraint.activate([
      stackView.heightAnchor.constraint(equalToConstant: 6),
      stackView.widthAnchor.constraint(equalTo: widthAnchor),
    ])
  }
  
  private func initBarsView() {
    let values:  [CGFloat] = [0, 1, 0];
    for (i, bar) in bars.enumerated() {
      bar.backgroundColor = BarView.barColors[i]
      barConstraints.append(bar.widthAnchor.constraint(equalTo: stackView.widthAnchor, multiplier: values[i]))
    }
    NSLayoutConstraint.activate(barConstraints)
  }

  public func setBars(active: CGFloat, recovered: CGFloat, deaths: CGFloat) {
    let values = [active, recovered, deaths];
    NSLayoutConstraint.deactivate(barConstraints)
    for (i, bar) in bars.enumerated() {
      bar.removeConstraint(barConstraints[i])
      barConstraints[i] = bar.widthAnchor.constraint(equalTo: stackView.widthAnchor, multiplier: values[i])
    }
    NSLayoutConstraint.activate(barConstraints)
    stackView.layoutIfNeeded()
  }

}


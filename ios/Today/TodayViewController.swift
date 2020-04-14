//
//  TodayViewController.swift
//  TodayExt
//
//  Created by Slava Sobolev on 4/13/20.
//


import UIKit
import NotificationCenter

class TodayViewController: UIViewController, NCWidgetProviding {
  
  let titleLabel = UILabel()
  let barView = BarView(frame: .zero)
  let labelsView = LabelsView(frame: .zero)

  override func viewDidLoad() {
    super.viewDidLoad()
    
    if #available(iOS 13, *) {
      overrideUserInterfaceStyle = .unspecified
    }
    
    initTitle()
    initBar()
    initLabels()
  }
  

  private func initTitle() {
    titleLabel.translatesAutoresizingMaskIntoConstraints = false
    titleLabel.text = "Russia +3 558 cases"
    titleLabel.font = UIFont.systemFont(ofSize: 20)
    
    view.addSubview(titleLabel)
  
    NSLayoutConstraint.activate([
      titleLabel.topAnchor.constraint(equalTo: view.topAnchor, constant: 3),
      titleLabel.leadingAnchor.constraint(equalTo: view.leadingAnchor, constant: 16),
      titleLabel.trailingAnchor.constraint(equalTo: view.trailingAnchor, constant: 16),
      titleLabel.heightAnchor.constraint(equalToConstant: 26),
    ])
  }

  private func initBar(){
    view.addSubview(barView)

    NSLayoutConstraint.activate([
      barView.topAnchor.constraint(equalTo: titleLabel.bottomAnchor, constant: 10),
      barView.leadingAnchor.constraint(equalTo: view.leadingAnchor, constant: 16),
      barView.trailingAnchor.constraint(equalTo: view.trailingAnchor, constant: -16),
    ])
    barView.setBars(active: 0.5, recovered: 0.24, deaths: 0.26)
  }
  
  private func initLabels() {
    view.addSubview(labelsView)
    
    NSLayoutConstraint.activate([
      labelsView.topAnchor.constraint(equalTo: barView.bottomAnchor, constant: 6),
      labelsView.leadingAnchor.constraint(equalTo: view.leadingAnchor, constant: 16),
      labelsView.trailingAnchor.constraint(equalTo: view.trailingAnchor, constant: -16),
    ])
  }

      
  func widgetPerformUpdate(completionHandler: (@escaping (NCUpdateResult) -> Void)) {
    // Perform any setup necessary in order to update the view.
    
    // If an error is encountered, use NCUpdateResult.Failed
    // If there's no update required, use NCUpdateResult.NoData
    // If there's an update, use NCUpdateResult.NewData
    
    completionHandler(NCUpdateResult.newData)
  }
    
}

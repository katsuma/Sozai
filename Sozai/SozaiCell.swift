//
//  SozaiCell.swift
//  Sozai
//
//  Created by katsuma on 2014/07/06.
//  Copyright (c) 2014年 katsuma. All rights reserved.
//

import UIKit
import QuartzCore

class SozaiCell: UITableViewCell {
    @IBOutlet var sozaiImageView : UIImageView
    @IBOutlet var sozaiLabel : UILabel
    @IBOutlet var sozaiIndicator : UIActivityIndicatorView

    override func drawRect(rect:CGRect) {
        super.drawRect(rect)

        self.sozaiIndicator.startAnimating()
        self.sozaiIndicator.hidesWhenStopped = true
    }

    override func awakeFromNib() {
        super.awakeFromNib()
        sozaiLabel.backgroundColor = UIColor(red: 0.95, green: 0.95, blue: 0.95, alpha: 0.8)
        sozaiLabel.layer.cornerRadius = 10
        sozaiLabel.clipsToBounds = true
    }
}

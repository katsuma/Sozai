//
//  TiqavCell.swift
//  Sozai
//
//  Created by katsuma on 2014/07/05.
//  Copyright (c) 2014年 katsuma. All rights reserved.
//

import UIKit

class TiqavCell: UITableViewCell {
    @IBOutlet var tiqavImageView : UIImageView
    @IBOutlet var tiqavUrlLabel : UILabel

    override func awakeFromNib() {
        super.awakeFromNib()
        tiqavUrlLabel.backgroundColor = UIColor(red: 0.95, green: 0.95, blue: 0.95, alpha: 0.8)
    }
}

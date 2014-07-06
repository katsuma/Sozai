//
//  ImageViewController.swift
//  Sozai
//
//  Created by katsuma on 2014/07/06.
//  Copyright (c) 2014年 katsuma. All rights reserved.
//

import UIKit

class DetailImageViewController : UIViewController, NSURLConnectionDelegate {
    @IBOutlet var imageView : UIImageView
    @IBOutlet var indicator : UIActivityIndicatorView

    var url: String = ""

    override func viewDidLoad () {
        super.viewDidLoad()
        if (nil != self.indicator) {
            self.indicator.startAnimating()
            self.indicator.hidesWhenStopped = true
        }

        var q_global: dispatch_queue_t = dispatch_get_global_queue(DISPATCH_QUEUE_PRIORITY_DEFAULT, 0);
        var q_main: dispatch_queue_t  = dispatch_get_main_queue();

        dispatch_async(q_global, {
            var imageURL: NSURL = NSURL.URLWithString(self.url)
            var imageData: NSData = NSData(contentsOfURL: imageURL)
            var image: UIImage = UIImage(data: imageData)

            dispatch_async(q_main, {
                self.imageView.image = image
                self.indicator.stopAnimating()
                }
            )
        })
    }
}

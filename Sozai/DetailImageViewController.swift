//
//  ImageViewController.swift
//  Sozai
//
//  Created by katsuma on 2014/07/06.
//  Copyright (c) 2014年 katsuma. All rights reserved.
//

import UIKit

class DetailImageViewController : UIViewController, NSURLConnectionDelegate, UIWebViewDelegate {
    @IBOutlet var imageView : UIWebView
    @IBOutlet var indicator : UIActivityIndicatorView

    var url: String = ""

    override func viewDidLoad () {
        super.viewDidLoad()

        if (nil != self.indicator) {
            self.indicator.startAnimating()
            self.indicator.hidesWhenStopped = true
        }

        var imageURL: NSURL = NSURL.URLWithString(self.url)
        var request: NSURLRequest = NSURLRequest(URL: imageURL)
        self.imageView.loadRequest(request)
    }

    func webViewDidFinishLoad(sender: UIWebViewDelegate) {
        self.indicator.stopAnimating()
    }
}

//
//  ViewController.swift
//  Sozai
//
//  Created by katsuma on 2014/07/05.
//  Copyright (c) 2014年 katsuma. All rights reserved.
//

import UIKit

class ViewController: UIViewController, UITableViewDelegate, UITableViewDataSource, NSURLConnectionDelegate {
                            
    @IBOutlet var tableView : UITableView
    let baseUrl = "http://sozai.katsuma.tv/images/"
    var images: String[] = []

    override func viewDidLoad() {
        super.viewDidLoad()
        self.title = "SOZAI"
        self.reload()
    }

    func reload() {
        let URL = NSURL(string: "http://sozai.katsuma.tv/api/sozais.json")
        let Req = NSURLRequest(URL: URL)
        let connection: NSURLConnection = NSURLConnection(request: Req, delegate: self, startImmediately: false)

        NSURLConnection.sendAsynchronousRequest(Req,
            queue: NSOperationQueue.mainQueue(),
            completionHandler: self.fetchResponse)
    }

    func fetchResponse(res: NSURLResponse!, data: NSData!, error: NSError!) {
        let json: NSArray = NSJSONSerialization.JSONObjectWithData(data, options: NSJSONReadingOptions.AllowFragments, error: nil) as NSArray

        for image: NSDictionary! in json {
            var imageUrl = image.objectForKey("image") as String
            images += imageUrl
        }

        dispatch_async(dispatch_get_main_queue(), {
            self.tableView.reloadData()
            })
    }

    func tableView(tableView: UITableView!, numberOfRowsInSection section: Int) -> Int  {
        return images.count
    }

    func tableView(tableView: UITableView!, heightForRowAtIndexPath indexPath: NSIndexPath!) -> CGFloat {
        return 120;
    }

    func tableView(tableView: UITableView?, cellForRowAtIndexPath indexPath:NSIndexPath!) -> UITableViewCell! {
        let cell: TiqavCell = self.tableView.dequeueReusableCellWithIdentifier("Cell") as TiqavCell

        var imageUrl = images[indexPath.row] as String

        cell.tiqavUrlLabel.text = imageUrl;
        cell.tiqavImageView.image = nil;

        var q_global: dispatch_queue_t = dispatch_get_global_queue(DISPATCH_QUEUE_PRIORITY_DEFAULT, 0);
        var q_main: dispatch_queue_t  = dispatch_get_main_queue();

        dispatch_async(q_global, {
            var imageURL: NSURL = NSURL.URLWithString(imageUrl)
            var imageData: NSData = NSData(contentsOfURL: imageURL)

            var image: UIImage = UIImage(data: imageData)

            dispatch_async(q_main, {
                cell.tiqavImageView.image = image;
                cell.layoutSubviews()
                })
            })
        return cell;
    }

    func tableView(tableView: UITableView?, didSelectRowAtIndexPath indexPath:NSIndexPath!) {
        var text: String = images[indexPath.row]

        // show alert
        let alertView: UIAlertView = UIAlertView()
        alertView.title = "taped"
        alertView.message = text
        alertView.addButtonWithTitle("close")
        alertView.show()
    }

    @IBAction func reloadBtnTouched(sender : AnyObject) {
        self.reload()
        self.tableView.scrollRectToVisible(CGRect(x:0 , y: 0, width: 1,height:1), animated: true)
    }
}


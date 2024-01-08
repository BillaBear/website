---
title: "Creating Dynamic Workflows With Symfony"
date: 2024-01-29T01:56:07+02:00
draft: true
author:
  display_name: Iain Cambridge
meta:
  keywords: Symfony, workflows, state machine, dynamic
  description: A step by step guide of how and why we created dynamic workflows in Symfony
  title: Creating Dynamic Workflows With Symfony
---
One of the core concepts within BillaBear is creating workflows for events such as creating or cancelling a subscription and receiving payments. There are often many things that need to happen during these process and if one fails you don't want to carry on with the others until the failed process is fixed and you want to be able to continue a failed process with ease instead of complex development work. To help BillaBear users with their processes we've created the ability to add custom steps to the workflows. Here we're going to explain how we used Symfony Workflows to create dynamic workflows.

## Two ways of defining custom Places

To ensure the best overall experience for BillaBear users we added two different ways of creating custom Places. You can define them via using code or via the BillaBear admin system. Both have their pros and cons.

### Code

It's possible to define a place in the code. To do this you create a class in the `Custom` namespace, a namespace where it's safe to make custom changes without BillaBear overwriting it in future releases, that implements `App\Workflow\Places\PlacesInterface`. 

This class will allow you to define:

* The name of the place 
* The piority of the place aka where it should be in the order
* The workflow that it is for 
* The name of the transition for the place

#### Pros

* Easy to maintain for development
* Ability to define a custom event handler for the transition 

#### Cons

* Can't be enabled/disabled without code changes and a deployment
* Can't reuse the dyanmic event handlers

### Admin UI




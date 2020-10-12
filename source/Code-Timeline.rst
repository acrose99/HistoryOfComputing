The Code for A Timeline
==========================

General
-------

.. code-block:: css

   ::before:
   ::after:

We dynamically render the separator and marker for each event. This is subject to change. This allows us to be more flexible in the long run, compared to similar sites.


Separator
----------
    .. code-block:: css

        .Event-body::after {
            content: "";
            position: absolute;
            display: flex;
            background-color: #2d667b;
            top: 40%;
            width: 20px;
            height: 20px;
            left: -2.5%;
            border-radius: 100%;
            transform: translateY(0);
            will-change: transform;
        }

Marker
---------
.. code-block:: css

        .Event-body::before {
            content: "";
            position: absolute;
            left: 0;
            top: 0;
            display: flex;
            background-color: #d9cfbe;
            width: 5px;
            height: 175%;
            border-radius: 100%;
            transform: translateY(0);
            will-change: transform;
        }

Unique Styling
--------------
For unique events, instead of using a background color, we may use a background gradient or image.
    * .. code-block:: css

        left: '',
        width: '',
        height: '',
        top: '';

    These variables should change for a unique event for better aligment.
